using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using InsurancePolicyApi.Models;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace InsurancePolicyApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InsurancePolicyController : ControllerBase
    {

        private InsurancePolicyDBContext _context;

        public InsurancePolicyController(InsurancePolicyDBContext context) {
            _context = context;
        }
    
        // GetPolicy api/InsurancePolicy/5
        [HttpGet("{id}")]
        public ActionResult<InsurancePolicy> GetPolicy(long id)
        {
            return _context.InsurancePolicies.Find(id);
        }

        // GeneratePolicy api/InsurancePolicy
        [HttpPost]
        public void GeneratePolicy([FromBody] InsurancePolicy policy)
        {
            _context.InsurancePolicies.Add(policy);
            _context.SaveChanges();
        }

        // RejectPolicy api/InsurancePolicy/5
        [HttpDelete("{id}")]
        public void RejectPolicy(long id)
        {
            var policy = _context.InsurancePolicies.Find(id);

            if(policy == null) {
                NotFound();
            }
            _context.InsurancePolicies.Remove(policy);
            _context.SaveChanges();
        }
    }
}
