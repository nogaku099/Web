USE [WEB_DATA]
GO
/****** Object:  StoredProcedure [dbo].[SP_CHECKOUT]    Script Date: Thursday, 01, 11, 2018 20:33:30 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[SP_CHECKOUT]
	@flag int = null,
	@maKhach nvarchar(100) = null,
	@diaChi nvarchar(100) = null,
	@danhDauMacDinh bit = null,
	@maDiaChi nvarchar(100) = null,
	@tenNguoiNhan nvarchar(100) = null,
	@sdtNguoiNhan nvarchar(100) = null,
	@maDon nvarchar(100) = null,
	@soTienThanhToan float = null,
	@soTienCoTrongTaiKhoan float = null,
	@tenChuThe nvarchar(100) = null,
	@maThe nvarchar(16) = null,
	@thang nvarchar(10) = null,
	@nam nvarchar(100) = null,
	@ccv nvarchar(100) = null,
	@status int = null
AS
BEGIN
	if(@flag = 1) --- get customer's address by customerCode
	begin
		select * from DM_KHACHHANG_DIACHI 
		where DM_KHACHHANG_DIACHI.MAKHACHHANG = @maKhach
	end

	if(@flag = 2) --- add new Address 
	begin
		INSERT INTO DM_KHACHHANG_DIACHI
		VALUES (@maKhach,@maDiaChi,@danhDauMacDinh,@diaChi,@tenNguoiNhan,@sdtNguoiNhan)
	end

	if(@flag = 3) -- change default customer Address
	begin
		update DM_KHACHHANG_DIACHI
		set MACDINH = 1
		where 
		DM_KHACHHANG_DIACHI.MAKHACHHANG = @maKhach and DM_KHACHHANG_DIACHI.MADIACHI = @maDiaChi

		update DM_KHACHHANG_DIACHI
		set MACDINH = 0
		where DM_KHACHHANG_DIACHI.MAKHACHHANG = @maKhach and not DM_KHACHHANG_DIACHI.MADIACHI = @maDiaChi
	end

	if(@flag = 4) -- update order status
	begin
		update DM_DONHANG
		set MATRANGTHAI = 1
		where 
		DM_DONHANG.MADONHANG = @maDon and DM_DONHANG.MAKHACHHANG = @maKhach

		update DM_DONHANG
		set MADIACHI = @maDiaChi
		where 
		DM_DONHANG.MADONHANG = @maDon and DM_DONHANG.MAKHACHHANG = @maKhach
	end

	if(@flag = 5) -- check if card exist
	begin
		select * from DM_THE
		where DM_THE.TENCHUTHE = @tenChuThe and DM_THE.MATHE = @maThe and DM_THE.THANG= @thang
		and DM_THE.NAM = @nam and DM_THE.CCV = @ccv
	end

	if(@flag = 6) -- update money to admin's card and money from paying card
	begin 
		DECLARE @tienAdmin float = null
		DECLARE @tienHienCoTrongTaiKhoan float = null
		set @tienAdmin = (select TIEN FROM DM_THE WHERE DM_THE.MATHE='4478663299238890')
		set @tienHienCoTrongTaiKhoan = (select TIEN FROM DM_THE WHERE DM_THE.MATHE = @maThe)
		update DM_THE
		set TIEN = @soTienThanhToan + @tienAdmin
		where DM_THE.MATHE='4478663299238890'
		update DM_THE
		set TIEN = @tienHienCoTrongTaiKhoan - @soTienThanhToan
		where DM_THE.MATHE = @maThe
		update DM_DONHANG
		set MAHINHTHUCTHANHTOAN = 2
		where DM_DONHANG.MADONHANG = @maDon and DM_DONHANG.MAKHACHHANG = @maKhach
	end

	if(@flag =7) -- get current order's status by orderCode
	begin
		select DM_DONHANG.MATRANGTHAI from DM_DONHANG
		where DM_DONHANG.MADONHANG = @maDon
	end 

	if(@flag = 8) -- update Status order by admin
	begin 
		update DM_DONHANG
		set MATRANGTHAI = @status
		where 
		DM_DONHANG.MADONHANG = @maDon

	end
	
END
