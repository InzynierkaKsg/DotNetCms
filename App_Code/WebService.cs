using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using Model;

/// <summary>
/// Summary description for WebService
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
 [System.Web.Script.Services.ScriptService]
public class WebService : System.Web.Services.WebService {

    public WebService () {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }

    [WebMethod]
    public void CreatePage(string name)
    {
        ModelContainer1 mc = new ModelContainer1();
        var newPage = new Page();
        newPage.Name = name;
        newPage.Content = "";
        newPage.Footer = "";
        mc.AddToPageSet(newPage);
        mc.SaveChanges();
    }


    [WebMethod]
    public void DeletePage(int id)
    {
        ModelContainer1 mc = new ModelContainer1();
        var page = (from x in mc.PageSet where x.Id == id select x).First();
        mc.PageSet.DeleteObject(page);
        mc.SaveChanges();
    }

    [WebMethod]
    public void UpdatePage(int id, string name)
    {
        ModelContainer1 mc = new ModelContainer1();
        var page = (from x in mc.PageSet where x.Id == id select x).First();
        page.Name = name;
        mc.SaveChanges();
    }

    [WebMethod]
    public void SaveContent(string html, int id)
    {
        ModelContainer1 mc = new ModelContainer1();
        var page = (from x in mc.PageSet where x.Id == id select x).First();
        page.Content = html;
        mc.SaveChanges();
    }
    [WebMethod]
    public string GetContent(int id)
    {
        ModelContainer1 mc = new ModelContainer1();
        var page = (from x in mc.PageSet where x.Id == id select x).First();
        return page.Content;
    }



    
}
