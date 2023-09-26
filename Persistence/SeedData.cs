using Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistence
{
    public class SeedData
    {

        private readonly DataContext _context;

        public SeedData(DataContext context)
        {
            _context = context;
        }


        public async Task SeedDatas(Activity activity)
        {

            if (_context.Activities.Any()) return;

            var activities = new List<Activity>
            {
                new Activity
                {
                    Title = "Future Activity 1",
                    Date = DateTime.UtcNow.AddMonths(8),
                    Description = "Activity 1 months in the future",
                    Category = "Film",
                    City = "London",
                    Venue = "cinema"
                }

            };


            await _context.Activities.AddRangeAsync(activities);
            await _context.SaveChangesAsync();
        }
    }
}
