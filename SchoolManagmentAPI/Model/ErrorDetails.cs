using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace SchoolManagmentAPI
{
    public class ErrorDetails
    {
        public string ErrorCode { get; set; }
        public string Message { get; set; }
        public override string ToString()
        {
            return JsonConvert.SerializeObject(this);
        }
    }
}
