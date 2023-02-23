using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace IT
{
	public partial class SiteMaster : MasterPage
	{
		protected void Page_Load(object sender, EventArgs e)
		{
			string constr = ConfigurationManager.ConnectionStrings["binddropdown"].ToString();
			// connection string  
			SqlConnection con = new SqlConnection(constr);
			con.Open();

			SqlCommand com = new SqlCommand("select * from dbo.Venue", con);
			// table name   
			SqlDataAdapter da = new SqlDataAdapter(com);
			DataSet ds = new DataSet();
			da.Fill(ds);  // fill dataset  
			DropDownList1.DataTextField = ds.Tables[0].Columns["crname"].ToString(); // text field name of table displayed in dropdown       
			DropDownList1.DataValueField = ds.Tables[0].Columns["classroomID"].ToString();
			// to retrive specific  textfield name   
			DropDownList1.DataSource = ds.Tables[0];      //assigning datasource to the dropdownlist  
			DropDownList1.DataBind();  //binding dropdownlist  
		}
	}
}