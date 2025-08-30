import { defineQuery } from "next-sanity";

export const queries = {
    // 1️⃣ Root question (force "entry" slug)
    rootQuestion: defineQuery(`
    *[_type == "question" && slug.current == "entry"][0]{
      _id,
      text,
      type,
      options[] {
        _key,
        label,
        "nextQuestion": nextQuestion->_id
      }
    }
  `),

    // 2️⃣ Fetch one question by ID
    questionById: defineQuery(`
    *[_type == "question" && _id == $id][0]{
      _id,
      text,
      type,
      options[] {
        _key,
        label,
        "nextQuestion": nextQuestion->_id
      }
    }
  `),

    // 3️⃣ Full tree (optional, still works)
    fullTree: defineQuery(`
    *[_type == "question" && !defined(parent)]{
      _id,
      text,
      type,
      options[] {
        _key,
        label,
        nextQuestion->{
          _id,
          text,
          type,
          options[] {
            _key,
            label,
            "nextQuestion": nextQuestion->_id
          }
        }
      }
    }
  `),

    // 4️⃣ Results
    resultsByQuestion: defineQuery(`
    *[_type == "result" && references($questionId)]{
      _id,
      title,
      description
    }
  `),
};
