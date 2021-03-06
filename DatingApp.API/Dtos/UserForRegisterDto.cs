using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        
        [StringLength(8, MinimumLength = 4, ErrorMessage = "You nust enter password between 4 and 8 characters")]
        public string Password { get; set; }
    }
}