const LinkedList = require('../LinkedList');

const LanguageService = {
  getUsersLanguage(db, user_id) {
    return db
      .from('language')
      .select(
        'language.id',
        'language.name',
        'language.user_id',
        'language.head',
        'language.total_score'
      )
      .where('language.user_id', user_id)
      .first();
  },

  getLanguageWords(db, language_id) {
    return db
      .from('word')
      .select(
        'id',
        'language_id',
        'original',
        'translation',
        'next',
        'memory_value',
        'correct_count',
        'incorrect_count'
      )
      .where({ language_id });
  },
  getLanguageHead(db, id) {
    return db('word')
      .select('id', 'next', 'original', 'correct_count', 'incorrect_count')
      .where({ id })
      .first();
  },

  fillList(db, language, words) {
    let wordList = new LinkedList();
    wordList.id = language.id;
    wordList.name = language.name; // Gujarati
    wordList.total_score = language.total_score;
    let word = words.find((w) => w.id === language.head);

    wordList.insertFirst({
      id: word.id,
      original: word.original,
      translation: word.translation,
      memory_value: word.memory_value,
      correct_count: word.correct_count,
      incorrect_count: word.incorrect_count,
    });
    while (word.next) {
      word = words.find((w) => w.id === word.next);
      wordList.insertLast({
        id: word.id,
        original: word.original,
        translation: word.translation,
        memory_value: word.memory_value,
        correct_count: word.correct_count,
        incorrect_count: word.incorrect_count,
      });
    }
    return wordList;
  },
  updateWord(db, word) {
    return db.from('word').where({ id: word.id }).update({
      memory_value: word.memory_value,
      incorrect_count: word.incorrect_count,
      correct_count: word.correct_count,
    });
  },
};

module.exports = LanguageService
