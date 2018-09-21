using SaleWeb.THU_VIEN;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SaleWeb.FRONT_END
{
    public partial class HomePage : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
           
        }

        protected void btn_Click(object sender, EventArgs e)
        {
            string cs = ConfigurationManager.ConnectionStrings["Connect"].ConnectionString;
            //ScriptManager.RegisterStartupScript(this, typeof(Page), "Alert", "<script>alert('" + cs+ "');</script>", false);
            string[] arrListStr = cs.Split(new char[] { ';' });
            string server = arrListStr[0].Substring(arrListStr[0].IndexOf('=') + 1, arrListStr[0].Length - (arrListStr[0].IndexOf('=') + 1));
            string data = arrListStr[1].Substring(arrListStr[1].IndexOf('=') + 1, arrListStr[1].Length - (arrListStr[1].IndexOf('=') + 1));
            //string server = arrListStr[2].Substring(arrListStr[0].IndexOf('=') + 1, arrListStr[0].Length - (arrListStr[0].IndexOf('=') + 1));
            string user = arrListStr[3].Substring(arrListStr[3].IndexOf('=') + 1, arrListStr[3].Length - (arrListStr[3].IndexOf('=') + 1));
            string pass = arrListStr[4].Substring(arrListStr[4].IndexOf('=') + 1, arrListStr[4].Length - (arrListStr[4].IndexOf('=') + 1));

            StoreProcedure tv = new StoreProcedure(server, data, user, pass);
            DataTable dt = tv.getDataTable("SP_DANGNHAP", new string[] { }, new object[] { });

            string script = "BootstrapDialog.show({title: title,message:"+dt.Rows[0]["TENKHACH"]+"});";
            ScriptManager.RegisterStartupScript(this, this.GetType(), "Pop", script, true);
        }
    }
}