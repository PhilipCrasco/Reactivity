using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistence.Unitofwork
{
    public class Unitofwork : IUnitofwork
    {

        private readonly DataContext _context;
        public SeedData seeddata { get; set; }


        public Unitofwork(DataContext context)
        {

            _context = context;

            seeddata = new SeedData(_context);

        }
    }
}
