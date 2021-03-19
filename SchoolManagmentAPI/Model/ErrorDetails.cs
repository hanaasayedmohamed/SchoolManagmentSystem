using Newtonsoft.Json;

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
