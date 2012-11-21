﻿using System;
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
        newPage.Content = "<li class='editable'>Witaj na nowej stronie!</li>";
        mc.AddToPageSet(newPage);
        mc.SaveChanges();
        
    }


    [WebMethod]
    public int GetLastPage()
    {
        ModelContainer1 mc = new ModelContainer1();
        var page = (from x in mc.PageSet orderby x.Id ascending select x).First();
        return page.Id;

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
    [WebMethod]
    public string GetLogo()
    {
        ModelContainer1 mc = new ModelContainer1();
        var page = (from x in mc.AllPagesSet select x).First();
        return page.Logo;
    }
    [WebMethod]
    public void SaveLogo(string html)
    {
        ModelContainer1 mc = new ModelContainer1();
        var page = (from x in mc.AllPagesSet select x).First();
        page.Logo = html;
        mc.SaveChanges();
    }
    [WebMethod]
    public void UpdateLogo(string html)
    {
        ModelContainer1 mc = new ModelContainer1();
        var page = (from x in mc.AllPagesSet select x).First();
        page.Logo = html;
        mc.SaveChanges();
    }

    [WebMethod]
    public void UpdateColor(int red, int green ,int blue)
    {
        ModelContainer1 mc = new ModelContainer1();
        var page = (from x in mc.AllPagesSet select x).First();
        page.ColorR = red;
        page.ColorG = green;
        page.ColorB = blue;

        mc.SaveChanges();
    }

    //[WebMethod]
    //public int GetColorR()
    //{
    //    ModelContainer1 mc = new ModelContainer1();
    //    var page = (from x in mc.AllPagesSet select x).First();

    //    return page.ColorR;
        
    //}

    
}
