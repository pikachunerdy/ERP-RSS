﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Faktura.Model
{
    public partial class JedinicaMjere
    {
        public JedinicaMjere()
        {
        }

        public int JedinicaMjereId { get; set; }
        public string Naziv { get; set; }
        public int? KlijentId { get; set; }
    }
}
