using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SaleWeb.THU_VIEN
{
    public class Function
    {
        public float CFloat(string val)
        {
            if (null == val) return 0;
            float result;
            if( float.TryParse(val, out result))
            {
                return result;
            }
            return 0;
        }


        public double CDouble(string val)
        {
            if (null == val) return 0;
            double result;
            if (double.TryParse(val, out result))
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

        public bool CBool(string val)
        {
            if (null == val) return false;
            bool result;
            if(bool.TryParse(val,out result))
            {
               return result;
            }
            return false;
        }
    }
}