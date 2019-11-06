using System;
using System.ComponentModel.DataAnnotations;

namespace InsurancePolicyApi.Models
{
    public class PolicyEvent
    {
         public long Id { get; set; }

        [Required]
        public EventType EventType { get; set; }

        [Required]
        public DateTime DateCreated { get; set; }

        public string Notes { get; set; }
    }
}