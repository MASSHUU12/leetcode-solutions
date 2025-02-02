fn count_prefixes(words: Vec<String>, s: String) -> i32 {
    words.iter().filter(|w| s.starts_with(w.as_str())).count() as i32
}

fn main() {
    let words = vec![
        "a".to_string(),
        "b".to_string(),
        "c".to_string(),
        "ab".to_string(),
        "bc".to_string(),
        "abc".to_string(),
    ];
    let str = "abc";

    println!(
        "Actual: {}, expected: {}",
        count_prefixes(words, str.to_string()),
        3
    );
}
