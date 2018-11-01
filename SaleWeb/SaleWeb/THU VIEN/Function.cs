using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SaleWeb.THU_VIEN
{
    public class Function
    {
        public float CFloat(object val)
        {
            if (null == val) return 0;
            float result;
            if( float.TryParse(val.ToString(), out result))
            {
                return result;
            }
            return 0;
        }


        public double CDouble(object val)
        {
            if (null == val) return 0;
            double result;
            if (double.TryParse(val.ToString(), out result))
            {
                return result;
            }
            return 0;
        }

        public string CString(object val)
        {
            if (null == val) return "";
            return val.ToString();
        }

        public bool CBool(object val)
        {
            if (null == val) return false;
            bool result;
            if(bool.TryParse(val.ToString(),out result))
            {
               return result;
            }
            return false;
        }

        public DateTime CDateTime(object val)
        {
            if (null == val) return DateTime.Now;
            DateTime result;
            if (DateTime.TryParse(val.ToString(), out result))
            {
                return result;
            }
            return DateTime.Now;
        }
    }
}