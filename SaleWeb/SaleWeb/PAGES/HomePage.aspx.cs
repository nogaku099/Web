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
        public static Function f;
        protected void Page_Load(object sender, EventArgs e)
        {
             if (sp == null)
                    sp = getConnect();
            if (f == null)
                f = new Function();

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
        public static DM_SANPHAM_CHITIET[] fLoadSanPham(string manhom, string text)
        {

            DataTable dt_hanghoa = sp.getDataTable("SP_HOMEPAGE", new string[] { "@flag", "@manhom","@text" }, new object[] { 1, manhom,text });
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
            if(null != HttpContext.Current.Session["GIOHANG"] && !HttpContext.Current.Session["GIOHANG"].ToString().Equals(""))
            {
                string SoLuong = "0";
                DataTable dt_temp = sp.getDataTable("SP_HOMEPAGE", new string[] { "@flag", "@session","@makhach" }, new object[] { 2, HttpContext.Current.Session["GIOHANG"].ToString(), HttpContext.Current.Session["MAKHACH"].ToString() });
                if(dt_temp.Rows.Count > 0)
                {
                    SoLuong = dt_temp.Rows[0]["SOLUONG"].ToString();
                }
                return /*HttpContext.Current.Session["GIOHANG"].ToString() + "_" +*/ SoLuong;
            }
            else
                return "0";
            //{
            //}
        }

        [WebMethod]
        public static string fMuaHang(string madon,string makhach, string masanpham, string soluong, string size,string mau,string dungtich,string muihuong)
        {
            if(null == HttpContext.Current.Session["DANGNHAP"] || HttpContext.Current.Session["DANGNHAP"].ToString().Equals(""))
            {
                return "LOGIN";
            }

            // kiem tra session gio hang
            if(null != HttpContext.Current.Session["GIOHANG"] && !HttpContext.Current.Session["GIOHANG"].ToString().Equals(""))
            {
                
                madon = HttpContext.Current.Session["GIOHANG"].ToString();

            }
            else
            {
                // tao ma don hang
                DataTable dt_temp = sp.getDataTable("SP_HOMEPAGE", new string[] { "@flag", "@makhach" }, new object[] { 3, makhach });
                if (dt_temp.Rows.Count > 0)
                {
                    madon = dt_temp.Rows[0]["MADONHANG"].ToString();
                    HttpContext.Current.Session["GIOHANG"] = madon;
                }
                //
            }
            //
            makhach = HttpContext.Current.Session["MAKHACH"].ToString();
            int result = sp.updateTable("SP_HOMEPAGE", new string[] { "@flag", "@madonhang", "@makhach", "@masanpham", "@soluong", "@size", "@mau","@muihuong","@dungtich" }
                                          , new object[] { 4, madon, makhach, masanpham, float.Parse(soluong), size, mau,muihuong,dungtich });
            if(result > -1)
            {
                return "OK";
            }else
            {
                return "FAIL";
            }

        }

        [WebMethod]
        public static string[] fLoadMau(string mahang, string size)
        {
            List<string> lst = new List<string>();
            DataTable dt_temp = sp.getDataTable("SP_HOMEPAGE", new string[] { "@flag", "@masanpham", "@size" }, new object[] { 5, mahang, size });
            if(dt_temp.Rows.Count > 0)
            {
                int length = dt_temp.Rows.Count;
                if (length > 5)
                    length = 5;
                for (int i = 0; i < length; i++)
                {
                    lst.Add(dt_temp.Rows[i]["MAU"].ToString());
                }
            }
            return lst.ToArray();
        }

        [WebMethod]
        public static DM_SANPHAM_CHITIET[] fLoadDetail(string productID)
        {
            DataTable dt_temp = sp.getDataTable("SP_HOMEPAGE", new string[] { "@flag", "@masanpham" },
                                                new object[] { 6, productID });
            List<DM_SANPHAM_CHITIET> lst_result = new List<DM_SANPHAM_CHITIET>();
            if(dt_temp.Rows.Count > 0)
            {
                for(int i = 0; i < dt_temp.Rows.Count; i++)
                {
                    DM_SANPHAM_CHITIET sp = new DM_SANPHAM_CHITIET();
                    sp.MASANPHAM = f.CString(dt_temp.Rows[i]["MASANPHAM"]);
                    sp.TENSANPHAM = f.CString(dt_temp.Rows[i]["TENSANPHAM"]);
                    sp.DONVITINH = f.CString(dt_temp.Rows[i]["DONVITINH"]);
                    sp.GIA1 = f.CFloat(dt_temp.Rows[i]["GIA1"]);
                    sp.GIA2 = f.CFloat(dt_temp.Rows[i]["GIA2"]);
                    sp.SIZE = f.CString(dt_temp.Rows[i]["SIZE"]);
                    sp.MAU = f.CString(dt_temp.Rows[i]["MAU"]);
                    sp.DUNGTICH = f.CString(dt_temp.Rows[i]["DUNGTICH"]);
                    sp.MUIHUONG = f.CString(dt_temp.Rows[i]["MUIHUONG"]);
                    sp.LOAI = f.CString(dt_temp.Rows[i]["LOAI"]);
                    sp.GIOITINH = f.CBool(dt_temp.Rows[i]["GIOITINH"]);
                    sp.SALE = f.CFloat(dt_temp.Rows[i]["SALE"]);
                    sp.TENSANPHAM = f.CString(dt_temp.Rows[i]["TENSANPHAM"]);

                    lst_result.Add(sp);


                }
                return lst_result.ToArray();
            }else
            {
                return null;
            }
        }

        [WebMethod]
        public static string[] fGetGroupName(string productID)
        {
            List<string> lst_result = new List<string>();
            DataTable dt_temp = sp.getDataTable("SP_HOMEPAGE", new string[] { "@flag", "@masanpham" },
                new object[] { 7,productID});
            if(dt_temp.Rows.Count > 0)
            {
                lst_result.Add(dt_temp.Rows[0]["TENNHOM"].ToString());
                lst_result.Add(dt_temp.Rows[0]["TENTHUONGHIEU"].ToString());
                lst_result.Add(dt_temp.Rows[0]["MOTA"].ToString());
            }
            return lst_result.ToArray();
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
                HttpContext.Current.Session["MAKHACH"] = temp.Rows[0]["MAKHACHHANG"].ToString();
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