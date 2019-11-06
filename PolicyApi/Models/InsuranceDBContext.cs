using InsurancePolicyApi.Models;
using Microsoft.EntityFrameworkCore;

namespace Models {
    public class InsurancePolicyDBContext: DbContext {

        public InsurancePolicyDBContext(DbContextOptions<InsurancePolicyDBContext> options):
        base(options) {
        }

        public DbSet<InsurancePolicy> InsurancePolicies {get;set;}

    }
}