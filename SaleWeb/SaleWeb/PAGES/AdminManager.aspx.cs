using SaleWeb.THU_VIEN;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SaleWeb.PAGES
{
    public partial class AdminManager : System.Web.UI.Page
    {

        public static StoreProcedure sp;
        public static Function f;
        public static string folderName = "";
        public static string fn = "";
        public string group = "";
        protected void Page_Load(object sender, EventArgs e)
        {
            if (sp == null)
                sp = getConnect();
            if (f == null)
                f = new Function();

            if(HttpContext.Current.Session["ADMINDANGNHAP"] == null)
            {
                Response.Redirect("~/PAGES/Admin.aspx");
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

        [WebMethod]
        public static string[] fUpLoadProduct(string groupID, string productName, string productDes, string productUnit, 
            string productPrice, string size, string color,string flavour, string capacity, string sex)
        {
            DataTable dt_temp = sp.getDataTable("SP_ADMIN", new string[] { "@flag","@groupID","@productName","@productDes","@productUnit",
            "@productPrice","@size","@color","@flavour","@capacity","@sex"}
            , new object[] { 1, groupID, productName, productDes, productUnit, f.CFloat(productPrice), size, color, flavour, capacity, f.CBool(sex) });

            List<string> lst_result = new List<string>();
            if (dt_temp.Rows.Count > 0)
            {
                if (dt_temp.Rows[0]["MA"].ToString() != "")
                {
                    lst_result.Add(groupID);
                    lst_result.Add(dt_temp.Rows[0]["MA"].ToString());
                    HttpContext.Current.Session["FILENAME"] = dt_temp.Rows[0]["MA"].ToString() + ".png";
                    switch (groupID)
                    {
                        case "NHH_001":
                            folderName = "DONGHO";
                            break;
                        case "NHH_002":
                            folderName = "GIAYDEP";
                            break;
                        case "NHH_003":
                            folderName = "QUANAO";
                            break;
                        case "NHH_004":
                            folderName = "TUIXACH";
                            break;
                        case "NHH_005":
                            folderName = "NUOCHOA";
                            break;
                    }
                    HttpContext.Current.Session["FILEFOL"] = folderName;
                    return lst_result.ToArray();
                }
                   
                else
                    return null;
            }else
                return null;

        }

        [WebMethod]
        public static DM_SANPHAM_CHITIET[] fReLoad(string groupID)
        {
            DataTable dt_temp = sp.getDataTable("SP_ADMIN", new string[] { "@flag", "@groupID" }, new object[] { 2, groupID });
            List<DM_SANPHAM_CHITIET> lst_result = new List<DM_SANPHAM_CHITIET>();
            if (dt_temp.Rows.Count > 0)
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
                    sp.MUIHUONG = f.CString(dt_temp.Rows[i]["MUIHUONG"]);
                    sp.DUNGTICH = f.CString(dt_temp.Rows[i]["DUNGTICH"]);
                    sp.GIOITINH = f.CBool(dt_temp.Rows[i]["GIOITINH"]);
                    sp.LOAI = f.CString(dt_temp.Rows[i]["LOAI"]);
                    sp.SALE = f.CFloat(dt_temp.Rows[i]["SALE"]);

                    lst_result.Add(sp);
                }
                return lst_result.ToArray();
            }
            return null;
        }

        [WebMethod]
        public static string[] fGetInFo(string productID, string size, string color, string flavour, string capacity,string groupID)
        {

            HttpContext.Current.Session["FILENAMEEDIT"] = productID + ".png";
            switch (groupID)
            {
                case "NHH_001":
                    folderName = "DONGHO";
                    break;
                case "NHH_002":
                    folderName = "GIAYDEP";
                    break;
                case "NHH_003":
                    folderName = "QUANAO";
                    break;
                case "NHH_004":
                    folderName = "TUIXACH";
                    break;
                case "NHH_005":
                    folderName = "NUOCHOA";
                    break;
            }
            HttpContext.Current.Session["FILEFOLEDIT"] = folderName;


            DataTable dt_temp = sp.getDataTable("SP_ADMIN", new string[] { "@flag", "@productID", "@size", "@color", "@flavour", "@capacity" },
                                                           new object[] { 3, productID, size, color, flavour, capacity });

            List<string> lst_result = new List<string>();
            if (dt_temp.Rows.Count > 0)
            {
                lst_result.Add(f.CString(dt_temp.Rows[0]["TENSANPHAM"]));
                lst_result.Add(f.CString(dt_temp.Rows[0]["MOTA"]));
                lst_result.Add(f.CString(dt_temp.Rows[0]["GIA1"]));
                lst_result.Add(f.CString(dt_temp.Rows[0]["GIOITINH"]));
                lst_result.Add(f.CString(dt_temp.Rows[0]["MANHOM"]));
                lst_result.Add(f.CString(dt_temp.Rows[0]["MASANPHAM"]));

                return lst_result.ToArray();
            }
            return null;
        }

        [WebMethod]
        public static string fDeleteProduct(string id, string size, string color, string fla, string capa)
        {
            int result = sp.updateTable("SP_ADMIN", new string[] { "@flag","@productID", "@size", "@color", "@flavour", "@capacity" },
                                                    new object[] { 4,id, size, color, fla, capa });

            if (result > -1)
                return "OK";
            return "FAIL";
        }
        [WebMethod]

        public static string fUpdateProduct(string id, string size, string color, string fla, string capa,string name, string des, string sex, string price,string groupID)
        {
            HttpContext.Current.Session["FILENAMEEDIT"] = id + ".png";
            switch (groupID)
            {
                case "NHH_001":
                    folderName = "DONGHO";
                    break;
                case "NHH_002":
                    folderName = "GIAYDEP";
                    break;
                case "NHH_003":
                    folderName = "QUANAO";
                    break;
                case "NHH_004":
                    folderName = "TUIXACH";
                    break;
                case "NHH_005":
                    folderName = "NUOCHOA";
                    break;
            }
            HttpContext.Current.Session["FILEFOLEDIT"] = folderName;

            int result = sp.updateTable("SP_ADMIN", new string[] { "@flag", "@productID", "@size", "@color", "@flavour", "@capacity", "@productName", "@productDes","@sex", "@productPrice" },
                                                    new object[] { 5, id, size, color, fla, capa,name,des,sex,f.CFloat(price) });

            if (result > -1)
                return "OK";
            return "FAIL";
        }

        [WebMethod]
        public static DM_DONHANG[] fShowOrder(string temp)
        {
            DataTable dt_temp = sp.getDataTable("SP_ADMIN", new string[] { "@flag" }, new object[] { 6 });

            List<DM_DONHANG> lst_result = new List<DM_DONHANG>();
            if (dt_temp.Rows.Count > 0)
            {
                for(int i = 0; i < dt_temp.Rows.Count; i++)
                {
                    DM_DONHANG dh = new DM_DONHANG();
                    dh.MADONHANG = f.CString(dt_temp.Rows[0]["MADONHANG"]);
                    dh.MAKHACHHANG = f.CString(dt_temp.Rows[0]["TENKHACHHANG"]);
                    dh.NGAYLAP = f.CDateTime(dt_temp.Rows[0]["NGAYLAP"]);
                    dh.TONGTIEN = f.CFloat(dt_temp.Rows[0]["TONGTIEN"]);
                    dh.MATRANGTHAI = f.CString(dt_temp.Rows[0]["TENTRANGTHAI"]);
                    dh.MAHINHTHUCTHANHTOAN = f.CString(dt_temp.Rows[0]["TENHTTT"]);


                    lst_result.Add(dh);
                }
                return lst_result.ToArray();
            }
            return null;
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
           
            //switch (lblGroupCode.InnerHtml)
            //{
            //    case "NHH_001":
            //        folderName = "DONGHO";
            //        break;
            //    case "NHH_002":
            //        folderName = "GIAYDEP";
            //        break;
            //    case "NHH_003":
            //        folderName = "QUANAO";
            //        break;
            //    case "NHH_004":
            //        folderName = "TUIXACH";
            //        break;
            //    case "NHH_005":
            //        folderName = "NUOCHOA";
            //        break;
            //}
           
            //ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert("+ Request.PhysicalApplicationPath + "/IMAGES/" + folderName + "/" + lblImageCode.InnerHtml + ".png" + ")", true);
            fn = (string) HttpContext.Current.Session["FILENAME"];// FileUpload1.FileName.ToString();
            string path = "/IMAGES/"+ (string)HttpContext.Current.Session["FILEFOL"]+"/";
            
            FileUpload1.SaveAs(Request.PhysicalApplicationPath + path +fn );
            FileUpload1.SaveAs(Request.PhysicalApplicationPath + "/IMAGES/ALL/" + fn);

        }

        protected void btnUpdate_Click(object sender, EventArgs e)
        {
           if(FileUpload2.FileName.ToString()!= "")
            {
                try
                {
                    string fname = (string)HttpContext.Current.Session["FILENAMEEDIT"];// FileUpload1.FileName.ToString();
                    string path = "/IMAGES/" + (string)HttpContext.Current.Session["FILEFOLEDIT"] + "/";

                    FileUpload2.SaveAs(Request.PhysicalApplicationPath + path + fname);
                    FileUpload2.SaveAs(Request.PhysicalApplicationPath + "/IMAGES/ALL/" + fname);
                }
                catch (Exception)
                {
                    
                }
            }
        }
    }
}