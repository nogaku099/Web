using SaleWeb.THU_VIEN;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Services;

namespace SaleWeb.FRONT_END
{
    public partial class HomePage : System.Web.UI.Page
    {
        public static StoreProcedure sp;
        protected void Page_Load(object sender, EventArgs e)
        {
             if (sp == null)
                    sp = getConnect();

                if (HttpContext.Current.Session["DANGNHAP"] != null && !HttpContext.Current.Session["DANGNHAP"].ToString().Equals(""))
                {
                    lblTenDangNhap.InnerHtml = HttpContext.Current.Session["DANGNHAP"].ToString() + " <i class='fa fa-sign-in'></i>";
                    hdfDangNhap.Value = "1";
                }
                else
                {
                    lblTenDangNhap.InnerHtml = "Đăng nhập  <i class='fa fa-sign-in'></i>";
                    hdfDangNhap.Value = "0";
                }

            

        }

        #region webmethod
        
        #endregion

        public StoreProcedure getConnect()
        {
            string connect = ConfigurationManager.ConnectionStrings["Connect"].ConnectionString;
            //ScriptManager.RegisterStartupScript(this, typeof(Page), "Alert", "<script>alert('" + cs+ "');</script>", false);
            string[] arrListStr = connect.Split(new char[] { ';' });
            string server = arrListStr[0].Substring(arrListStr[0].IndexOf('=') + 1, arrListStr[0].Length - (arrListStr[0].IndexOf('=') + 1));
            string data = arrListStr[1].Substring(arrListStr[1].IndexOf('=') + 1, arrListStr[1].Length - (arrListStr[1].IndexOf('=') + 1));
            //string server = arrListStr[2].Substring(arrListStr[0].IndexOf('=') + 1, arrListStr[0].Length - (arrListStr[0].IndexOf('=') + 1));
            string user = arrListStr[3].Substring(arrListStr[3].IndexOf('=') + 1, arrListStr[3].Length - (arrListStr[3].IndexOf('=') + 1));
            string pass = arrListStr[4].Substring(arrListStr[4].IndexOf('=') + 1, arrListStr[4].Length - (arrListStr[4].IndexOf('=') + 1));
            StoreProcedure sp = new StoreProcedure(server, data, user, pass);
            return sp;
        }

        protected void btnDangNhap_Click(object sender, EventArgs e)
        {
            DataTable temp = sp.getDataTable("SP_DANGNHAP", new string[] { "@flag", "@ten", "@matkhau" }, new object[] { 1, txtTenDangNhap.Value,txtMatKhau.Value });
            if (temp.Rows.Count > 0)
            {
                HttpContext.Current.Session["DANGNHAP"] = temp.Rows[0]["TENDANGNHAP"].ToString();
                Response.Redirect("~/PAGES/HomePage.aspx");
            }
        }
    }
}