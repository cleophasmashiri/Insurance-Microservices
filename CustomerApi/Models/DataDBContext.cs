using CustomerApi.Models;
using Microsoft.EntityFrameworkCore;

namespace CustomerApi.Models {
    public class DataDBContext: DbContext {

        public DataDBContext(DbContextOptions<DataDBContext> options):
        base(options) {
        }

        public DbSet<Customer> Customers {get;set;}

    }
}