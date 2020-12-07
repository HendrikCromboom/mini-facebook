using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class FriendController : ControllerBase
  {
    [HttpGet]
    public IEnumerable<string> Get()
    {
      return new string[] { "Cis", "Felix", "Tessa", "Lea" };
    }

    [HttpGet("{id}")]
    public string Get(int id)
    {
      return "Kayalin";
    }
  }
}
