using SaleWeb.THU_VIEN;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SaleWeb.PAGES
{
    public partial class Admin : System.Web.UI.Page
    {
        public static StoreProcedure sp;
        public static Function f;
        protected void Page_Load(object sender, EventArgs e)
        {
            if (sp == null)
                sp = getConnect();
            if (f == null)
                f = new Function();
        }

        protected void btnAdLog_Click(object sender, EventArgs e)
        {
            DataTable temp = sp.getDataTable("SP_DANGNHAP", new string[] { "@flag", "@ten", "@matkhau" }, new object[] { 11, txtAdLog.Value, txtPassAdLog.Value });
            if (temp.Rows.Count > 0)
            {
                HttpContext.Current.Session["ADMINDANGNHAP"] = temp.Rows[0]["TENDANGNHAP"].ToString();
               // HttpContext.Current.Session["MAKHACH"] = temp.Rows[0]["MAKHACHHANG"].ToString();
                Response.Redirect("~/PAGES/AdminManager.aspx");
            }
            
        }

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
    }
}