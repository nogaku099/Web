﻿//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace SaleWeb
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class SaleWebEntities : DbContext
    {
        public SaleWebEntities()
            : base("name=SaleWebEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public DbSet<DM_CHITIETDONHANG> DM_CHITIETDONHANG { get; set; }
        public DbSet<DM_CHITIETKHUYENMAI> DM_CHITIETKHUYENMAI { get; set; }
        public DbSet<DM_CHITIETSANPHAM> DM_CHITIETSANPHAM { get; set; }
        public DbSet<DM_DONHANG> DM_DONHANG { get; set; }
        public DbSet<DM_KHACHHANG> DM_KHACHHANG { get; set; }
        public DbSet<DM_KHUYENMAI> DM_KHUYENMAI { get; set; }
        public DbSet<DM_NHOMSANPHAM> DM_NHOMSANPHAM { get; set; }
        public DbSet<DM_SANPHAM> DM_SANPHAM { get; set; }
        public DbSet<DM_TAIKHOAN> DM_TAIKHOAN { get; set; }
    }
}
