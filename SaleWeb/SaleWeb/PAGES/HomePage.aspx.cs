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
                    //lblTenDangNhap.InnerHtml = HttpContext.Current.Session["DANGNHAP"].ToString() + " <i class='fa fa-sign-in'></i>";
                    hdfDangNhap.Value = "1";
                    lblDangNhap.InnerHtml = "<a href = '#'  id = 'lblTenDangNhap' runat = 'server' style = 'color: white;' onclick = 'fShowDangXuat();' >"+ HttpContext.Current.Session["DANGNHAP"].ToString() + " <i class='fa fa-sign-in'></i></a>";
            }
                else
                {
                    //lblTenDangNhap.InnerHtml = "Đăng nhập  <i class='fa fa-sign-in'></i>";
                    hdfDangNhap.Value = "0";
                    lblDangNhap.InnerHtml = "<a href = '#'  id = 'lblTenDangNhap' runat = 'server' style = 'color: white;' onclick = 'fShowDangNhap();' > Đăng nhập <i class='fa fa-sign-in'></i></a>";

                }

            

        }

        #region webmethod
        [WebMethod]
        public static DM_SANPHAM_CHITIET[] fLoadSanPham(string manhom)
        {

            DataTable dt_hanghoa = sp.getDataTable("SP_HOMEPAGE", new string[] { "@flag", "@manhom" }, new object[] { 1, manhom });
            List<DM_SANPHAM_CHITIET> lst = new List<DM_SANPHAM_CHITIET>();
            if (dt_hanghoa.Rows.Count > 0)
            {

                DM_SANPHAM_CHITIET sanpham_chitiet;
                for(int i = 0; i < dt_hanghoa.Rows.Count; i++)
                {
                    sanpham_chitiet = new DM_SANPHAM_CHITIET();

                    sanpham_chitiet.MASANPHAM = dt_hanghoa.Rows[i]["MASANPHAM"].ToString();
                    sanpham_chitiet.TENSANPHAM = dt_hanghoa.Rows[i]["TENSANPHAM"].ToString();
                    sanpham_chitiet.DONVITINH = dt_hanghoa.Rows[i]["DONVITINH"].ToString();
                    sanpham_chitiet.GIA1 = Double.Parse(dt_hanghoa.Rows[i]["GIA1"].ToString());
                    sanpham_chitiet.GIA2 = Double.Parse(dt_hanghoa.Rows[i]["GIA2"].ToString());
                    sanpham_chitiet.DUNGTICH = dt_hanghoa.Rows[i]["DUNGTICH"].ToString();
                    sanpham_chitiet.SIZE = dt_hanghoa.Rows[i]["SIZE"].ToString();
                    sanpham_chitiet.MAU = dt_hanghoa.Rows[i]["MAU"].ToString();
                    sanpham_chitiet.SALE = Double.Parse(dt_hanghoa.Rows[i]["SALE"].ToString());
                    sanpham_chitiet.LOAI = dt_hanghoa.Rows[i]["LOAI"].ToString();
                    sanpham_chitiet.GIOITINH = Boolean.Parse(dt_hanghoa.Rows[i]["GIOITINH"].ToString());

                    lst.Add(sanpham_chitiet);
                }
                return lst.ToArray();
            }
            return null;
        }

        [WebMethod]
        public static string fGetSoLuong()
        {
            //if(null != HttpContext.Current.Session["GIOHANG"] && !HttpContext.Current.Session["GIOHANG"].ToString().Equals(""))
            //{
                string SoLuong = "0";
                DataTable dt_temp = sp.getDataTable("SP_HOMEPAGE", new string[] { "@flag", "@session" }, new object[] { 2, 1 });
                if(dt_temp.Rows.Count > 0)
                {
                    SoLuong = dt_temp.Rows[0]["SOLUONG"].ToString();
                }
                return /*HttpContext.Current.Session["GIOHANG"].ToString() + "_" +*/ SoLuong;
            //}
            //else
            //    return "0";
            //{
            //}
        }
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

        protected void pnlSanPham_Load(object sender, EventArgs e)
        {
            string manhom = "NHH_001";
            ScriptManager.RegisterStartupScript(this, Page.GetType(), "Script", "fLoadSanPham("+'"'+manhom+'"'+")", true);
        }
    }
}