using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using JabberdexiconApi.Models;
using JabberdexiconApi.ViewModels;

namespace JabberdexiconApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WordsController : ControllerBase
    {
        private DictionaryContext _db;

        public WordsController()
        {
            this._db = new DictionaryContext();
        }

        [HttpGet("{letter}")]
        public ActionResult<IEnumerable<Word>> GetAction([FromRoute] char letter)
        {
            // return all words for a given letter
            var results = _db.Words.Where(w => w.Value[0] == letter);
            return results.ToList();
        }

        [HttpPost]
        public ActionResult<Word> PostAction([FromBody]NewWordViewModel newWord)
        {
            var _word = new Word{
                Value = newWord.Value
            };
            _db.Words.Add(_word);
            _db.SaveChanges();
            return _word;
        }
    }
}