﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Faktura.Model
{
    public partial class Kupac
    {
        public Kupac()
        {
        }

        public int KupacId { get; set; }
        public string Naziv { get; set; }
        public string Adresa { get; set; }
        public string Email { get; set; }
        public string Sifra { get; set; }
        public string Telefon { get; set; }
        public string Pdvbroj { get; set; }
        public int? GradId { get; set; }
        public int? KlijentId { get; set; }
    }
}