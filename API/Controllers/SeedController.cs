using Domain;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Persistence.Unitofwork;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SeedController : ControllerBase
    {
        private readonly IUnitofwork _unitofwork;

        public SeedController(IUnitofwork unitofwork)
        {
            _unitofwork = unitofwork;
        }

        [HttpPost]
        [Route("PostSeedData")]
        public async Task<IActionResult> postseeddata(Activity activity)
        {

            await _unitofwork.seeddata.SeedDatas(activity);
            return Ok(activity);
        }


    }
}
