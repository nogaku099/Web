using SaleWeb.THU_VIEN;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SaleWeb.PAGES
{
    public partial class CartPage : System.Web.UI.Page
    {
        public static StoreProcedure sp;
        protected void Page_Load(object sender, EventArgs e)
        {
            if (HttpContext.Current.Session["GIOHANG"] != null && HttpContext.Current.Session["GIOHANG"].ToString() != "" &&
                HttpContext.Current.Session["DANGNHAP"] != null && HttpContext.Current.Session["DANGNHAP"].ToString() != "" )
            {
                dropdownMenuTaiKhoan.InnerHtml = HttpContext.Current.Session["DANGNHAP"].ToString();
                ScriptManager.RegisterClientScriptBlock(this, Page.GetType(), "script", "loadGioHang('true')", true);
            }
            else
            {
                //DataTable dt = sp.getDataTable()
                //HttpContext.Current.Session["GIOHANG"] = 
            }
        }

        protected void btnMenuTaiKhoan_Click(object sender, EventArgs e)
        {

        }
    }
}