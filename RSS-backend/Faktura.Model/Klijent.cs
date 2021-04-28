﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Faktura.Model
{
    public class Klijent
    {
        public Klijent()
        {
        }

        public int KlijentId { get; set; }
        public string Naziv { get; set; }
        public string Adresa { get; set; }
        public string Mjesto { get; set; }
        public string Pdvbroj { get; set; }
        public string Idbroj { get; set; }
        public string Telefon { get; set; }
        public string OdgovornaOsoba { get; set; }
        public string Email { get; set; }
    }
}
