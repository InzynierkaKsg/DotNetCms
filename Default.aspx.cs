using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;
using Model;

public partial class _Default : System.Web.UI.Page
{
    private string _PagesCollection;
    public string PagesCollection
    {
        get { return _PagesCollection; }
        set { _PagesCollection = value; }
    }

    private string _PageContent;
    public string PageContent
    {
        get { return _PageContent; }
        set { _PageContent = value; }
    }

    private int _PageId;
    public int PageId
    {
        get { return _PageId; }
        set { _PageId = value; }
    }
    protected void Page_Load(object sender, EventArgs e)
    {
        ModelContainer1 mc = new ModelContainer1();
        
        PagesCollection = "";
        int i =0;
        foreach (Model.Page p in mc.PageSet)
        {
            i++;
            PagesCollection += "<li><a class='hovGradient' id='pageId"+p.Id+"' href='#'>" + p.Name + "</a></li>";
            if (i == 1)
            {
                PageId = p.Id;
                PageContent = p.Content;

            }

        }
    }
}