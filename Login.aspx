<%@ Page language="c#" AutoEventWireup="true" %>
<%@ Import Namespace="IT" %>

<html>
  <body>
    <form id="Login" method="post" runat="server">
            <asp:Image ID="Image2" runat="server" Height="164px" ImageUrl="~/Images/Logos FA-01.jpg" Width="386px" />
        <hr />
    <div style="text-align: center" >
        <br />
        <br />
      <asp:Label ID="Label1" Runat=server Width="75px" >Domain  :</asp:Label>
        <asp:DropDownList ID="txtDomain" runat="server" Width="200px">
            <asp:ListItem Value="staff">staff</asp:ListItem>
            <asp:ListItem Value="student">student</asp:ListItem>
        </asp:DropDownList>
        <br>  
        <br />
      <asp:Label ID="Label2" Runat=server Width="75px" >User ID  :</asp:Label>
      <asp:TextBox ID=txtUsername Runat=server  Width="200px"></asp:TextBox><br>
        <br />
      <asp:Label ID="Label3" Runat=server Width="75px" >Password:</asp:Label>
      <asp:TextBox ID="txtPassword" Runat=server TextMode=Password  Width="200px"></asp:TextBox><br>
        <br />
      <asp:Button ID="btnLogin" Runat=server Text="Login" OnClick="Login_Click"></asp:Button><br>
      <asp:Label ID="errorLabel" Runat=server ForeColor=#ff3300></asp:Label><br>
      <asp:Label ID="Label4" Runat=server ForeColor=#ff3300></asp:Label><br>
      <asp:CheckBox ID=chkPersist Runat=server Text="Persist Cookie" />
        <br />
        <br />
    </div>

    </form>

  </body>
</html>
<script runat=server>
void Login_Click(Object sender, EventArgs e)
{
        Response.Redirect("/Main.aspx");

}
    </script>
