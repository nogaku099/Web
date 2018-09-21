using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Web;

namespace SaleWeb.THU_VIEN
{
    public class StoreProcedure
    {
        /*
         * Name : Store Procedure
         * Tyel : Classlib
         * Function : connect to SQL Server and process data by query (CRUD)
         * Create date : 21/09/2018
         * *.*/
       
        #region Declare variables
        public static string chuoi_ket_noi = @"Server = @Server; Database = @Database; uid = @uid; Password = @Password;";
        public static string ten_file = HttpRuntime.AppDomainAppPath + "\\login.xml";
        public SqlConnection connection;
        #endregion

        #region Function 
        /**
         * Name : get[DATAOUTPUT]
         * Type : funtion
         * Input : store name, param[], object[]
         * Output : datatable,dataset,state of executed query
         * Created date : 26/08/2018
         * .*/
        public StoreProcedure()
        {
            this.getConnect();
        }

        public StoreProcedure(string server, string data, string sUser, string sPwd)
        {
            chuoi_ket_noi = chuoi_ket_noi.Replace("@Server", server);
            chuoi_ket_noi = chuoi_ket_noi.Replace("@Database", data);
            chuoi_ket_noi = chuoi_ket_noi.Replace("@uid", sUser);
            chuoi_ket_noi = chuoi_ket_noi.Replace("@Password", sPwd);
        }

        private void getConnect()
        {
            if (File.Exists(ten_file))
            {
                DataSet dataset_login = new DataSet();
                dataset_login.ReadXml(ten_file);

                chuoi_ket_noi = chuoi_ket_noi.Replace("@Server", dataset_login.Tables[0].Rows[0]["Server"].ToString());
                chuoi_ket_noi = chuoi_ket_noi.Replace("@Database", dataset_login.Tables[0].Rows[0]["Database"].ToString());
                chuoi_ket_noi = chuoi_ket_noi.Replace("@uid", dataset_login.Tables[0].Rows[0]["uid"].ToString());
                chuoi_ket_noi = chuoi_ket_noi.Replace("@Password", dataset_login.Tables[0].Rows[0]["Password"].ToString());
            }
            else
            {
                DataTable datatable_login = new DataTable("login");
                datatable_login.Columns.Add("Server");
                datatable_login.Columns.Add("Database");
                datatable_login.Columns.Add("uid");
                datatable_login.Columns.Add("Password");

                DataRow datarow_login = datatable_login.NewRow();
                datarow_login["Server"] = ".";
                datarow_login["Database"] = "REVIEW";
                datarow_login["uid"] = "sa";
                datarow_login["Password"] = "123";

                datatable_login.Rows.Add(datarow_login);
                datatable_login.WriteXml(ten_file);

                using (System.Diagnostics.Process proc = new System.Diagnostics.Process())
                {
                    proc.StartInfo.FileName = ten_file;
                    proc.Start();
                }

            }
        }

        public DataSet getDataSet(string store_name, string[] param, object[] obj)
        {
            if (connection == null)
            {
                connection = new SqlConnection();
                connection.ConnectionString = chuoi_ket_noi;
            }

            if (connection.State == ConnectionState.Open)
            {
                connection.Close();
            }
            connection.Open();

            DataSet result = new DataSet();

            try
            {
                SqlCommand command = new SqlCommand(store_name, connection);
                command.CommandType = CommandType.StoredProcedure;
                command.CommandTimeout = 2000;
                if (param != null)
                {
                    int length = param.Length - 1;
                    for (int i = 0; i <= length; i++)
                    {
                        if (param[i] != "")
                        {
                            command.Parameters.Add(new SqlParameter(param[i], obj[i]));
                        }
                    }
                }
                SqlDataAdapter adapter = new SqlDataAdapter(command);
                adapter.SelectCommand = command;
                adapter.Fill(result);
                command.Dispose();
                adapter.Dispose();
            }
            catch (Exception ex)
            {
               // MessageBox.Show("ERROR: " + store_name + " " + ex.Message);
                result = null;
            }
            finally
            {
                connection.Close();
            }
            return result;
        }

        public DataTable getDataTable(string store_name, string[] param, object[] obj)
        {
            if (connection == null)
            {
                connection = new SqlConnection();
                connection.ConnectionString = chuoi_ket_noi;
            }

            if (connection.State == ConnectionState.Open)
            {
                connection.Close();
            }
            connection.Open();

            DataTable result = new DataTable();
            try
            {

                SqlCommand command = new SqlCommand(store_name, connection);
                command.CommandType = CommandType.StoredProcedure;
                command.CommandTimeout = 2000;
                if (param != null)
                {
                    int length = param.Length - 1;
                    for (int i = 0; i <= length; i++)
                    {
                        if (param[i] != "")
                        {
                            command.Parameters.Add(new SqlParameter(param[i], obj[i]));
                        }
                    }
                }
                SqlDataAdapter adapter = new SqlDataAdapter(command);
                adapter.SelectCommand = command;
                adapter.Fill(result);
                command.Dispose();
                adapter.Dispose();
            }
            catch (Exception ex)
            {
               // MessageBox.Show("ERROR: " + store_name + " " + ex.Message);
                result = null;
            }
            finally
            {
                connection.Close();
            }


            return result;
        }

        public int updateTable(string store_name, string[] param, object[] obj)
        {
            if (connection == null)
            {
                connection = new SqlConnection();
                connection.ConnectionString = chuoi_ket_noi;
            }

            if (connection.State == ConnectionState.Open)
            {
                connection.Close();
            }
            connection.Open();

            int result = 0;
            try
            {
                SqlCommand command = new SqlCommand(store_name, connection);
                command.CommandType = CommandType.StoredProcedure;
                command.CommandTimeout = 2000;
                SqlTransaction trans = connection.BeginTransaction();
                command.Transaction = trans;

                if (param != null)
                {
                    int length = param.Length - 1;
                    for (int i = 0; i <= length; i++)
                    {
                        if (param[i] != "")
                        {
                            command.Parameters.Add(new SqlParameter(param[i], obj[i]));
                        }
                    }
                }
                command.Parameters.Add(new SqlParameter("@RETURN_VALUE", SqlDbType.Int, 0));
                command.Parameters["@RETURN_VALUE"].Direction = ParameterDirection.ReturnValue;
                command.ExecuteNonQuery();

                trans.Commit();
                result = (int)command.Parameters["@RETURN_VALUE"].Value;
                command.Dispose();
                trans.Dispose();
                command = null;
            }
            catch (Exception ex)
            {
                if (ex.Message.ToString().Contains("BEGIN") && ex.Message.ToString().Contains("COMMIT"))
                {
                   // MessageBox.Show("ERROR: Transfer error. Transaction is rollbacked. You are safe now! ");
                }
                else
                  //  MessageBox.Show("ERROR: " + store_name + " " + ex.Message);
                result = -1;
            }
            finally
            {
                connection.Close();
            }
            return result;
        }
        #endregion
    }
}