<%@ WebHandler Language="C#" Class="FileUploaderHandler" %>

using System;
using System.Web;

public class FileUploaderHandler : IHttpHandler {
    
    public void ProcessRequest (HttpContext context) {
        if (context.Request.Files.Count > 0)
        {
            HttpFileCollection files = context.Request.Files;
            foreach (string key in files)
            {
                HttpPostedFile file = files[key];
                string fileName = file.FileName;
                fileName = context.Server.MapPath("~/images/" + fileName);
                file.SaveAs(fileName);
            }
        }
        context.Response.ContentType = "text/plain";
        context.Response.Write("File(s) uploaded successfully!");
    }
 
    public bool IsReusable {
        get {
            return false;
        }
    }

}