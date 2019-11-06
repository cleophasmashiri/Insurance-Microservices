using System;
using System.ComponentModel.DataAnnotations;

namespace InsurancePolicyApi.Models
{
    public class InsurancePolicy
    {
         public long Id { get; set; }

        [Required]
        public DateTime StartDate { get; set; }

        [Required]
        [Range(minimum: 0.00, maximum: (double) decimal.MaxValue)]
        public decimal SumInsured { get; set; }
    }
}