USE [WEB_DATA]
GO
/****** Object:  StoredProcedure [dbo].[SP_CHECKOUT]    Script Date: Monday, 22, 10, 2018 20:51:07 ******/
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
	@flag int null,
	@maKhach nvarchar(100) null,
	@diaChi nvarchar(100) null,
	@danhDauMacDinh bit null
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
		VALUES (@maKhach,@diaChi,@danhDauMacDinh)
	end

	if(@flag = 3) -- change default customer Address
	begin
		update DM_KHACHHANG_DIACHI
		set MACDINH = @danhDauMacDinh
		where 
		DM_KHACHHANG_DIACHI.MAKHACHHANG = @maKhach and DM_KHACHHANG_DIACHI.DIACHI = @diaChi

		update DM_KHACHHANG_DIACHI
		set MACDINH = 0
		where DM_KHACHHANG_DIACHI.MAKHACHHANG = @maKhach and not DM_KHACHHANG_DIACHI.DIACHI = @diaChi
	end
END
