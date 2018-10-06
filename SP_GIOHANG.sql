USE [WEB_DATA]
GO
/****** Object:  StoredProcedure [dbo].[SP_GIOHANG]    Script Date: Saturday, 06, 10, 2018 10:46:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[SP_GIOHANG]
	@flag int = null,
	@maDonHang nvarchar(100) = null,
	@maSanPham nvarchar(100) = null
AS
BEGIN
	if(@flag = 1) -- tao ma don hang moi
	begin
		DECLARE @MA INT = NULL
		SET @MA	=  (SELECT MAX(CAST (MADONHANG AS INT))+1 FROM DM_DONHANG )
		
		
		DECLARE @MA2 NVARCHAR = NULL
		SET @MA2 = CAST(@MA AS NVARCHAR)
		--WHILE( LEN(@MA2) < 6)
		--BEGIN
			
		--END
	end

	if(@flag = 2) -- load ChiTietDonHang Theo MaDonHang Lay tu session
	begin
		select * from DM_DONHANG_CHITIET bangChiTietDonHang
		left join DM_DONHANG bangDonHang on bangDonHang.MADONHANG =bangChiTietDonHang.MADONHANG
		where bangChiTietDonHang.MADONHANG = @maDonHang 
		and bangDonHang.MATRANGTHAI=0
	end

	if(@flag =3) -- lay ma nhom theo ma san pham
	begin 
		select * from DM_SANPHAM
		where DM_SANPHAM.MASANPHAM = @maSanPham
	end
END
