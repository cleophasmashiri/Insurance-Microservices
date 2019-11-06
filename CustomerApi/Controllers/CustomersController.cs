using System;
using System.Collections.Generic;
using CustomerApi.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Microsoft.Extensions.Logging;

namespace InsurancePolicyApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
         protected readonly ILogger Logger;

        private DataDBContext _context;

        public CustomersController(DataDBContext context, ILogger<CustomersController> logger)
        {
            _context = context;
            Logger = logger;
        }

        // GetCustomer api/Customer/5
        [HttpGet("{id}")]
        public ActionResult<Customer> Get(long id)
        {
            Logger.Log(LogLevel.Information, "Get Customer");
            return _context.Customers.Find(id);
        }

        // GetCustomer api/Customer/5
        [HttpGet()]
        public ActionResult<List<Customer>> GetAll()
        {
             Logger.Log(LogLevel.Information, "Get All Customer");
            return _context.Customers.AsQueryable().ToList();
        }

        // Generate Customer api/Customer
        [HttpPost]
        public void Create([FromBody] Customer customer)
        {
             Logger.Log(LogLevel.Information, "Create Customer");
            _context.Customers.Add(customer);
            _context.SaveChanges();
        }

        // Delete Customer api/Customer/5
        [HttpDelete("{id}")]
        public void Delete(long id)
        {
             Logger.Log(LogLevel.Information, "Delete Customer");
            var policy = _context.Customers.Find(id);

            if (policy == null)
            {
                NotFound();
            }
            _context.Customers.Remove(policy);
            _context.SaveChanges();
        }

        // Save Customer api/Customer/5
        [HttpPut("{id}")]
        public void Update(long id, [FromBody] Customer customer)
        {
             Logger.Log(LogLevel.Information, "Update Customer");
            
            var oldCustomer = _context.Customers.Find(id);

            if (oldCustomer == null)
            {
              NotFound();
            }
            oldCustomer.Firstname = customer.Firstname; 
            oldCustomer.Lastname = customer.Lastname; 
            oldCustomer.Email = customer.Email;
            oldCustomer.City = customer.City; 
            oldCustomer.PhoneNumber = customer.PhoneNumber;
            oldCustomer.PostalCode = customer.PostalCode; 
            oldCustomer.StreetAddress = customer.StreetAddress;
            oldCustomer.Birthday = customer.Birthday;
            _context.SaveChanges();
        }
    }
}
