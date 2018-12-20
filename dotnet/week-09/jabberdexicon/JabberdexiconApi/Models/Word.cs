using System;
using System.ComponentModel;

namespace JabberdexiconApi.Models
{
    public class Word
    {
        public int Id { get; set; }
        public string Value { get; set; }

        public DateTime DateAdded { get; set; } = DateTime.Now;
    }
}