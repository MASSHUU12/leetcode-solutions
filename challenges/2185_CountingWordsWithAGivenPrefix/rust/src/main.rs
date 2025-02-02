fn prefix_count(words: Vec<String>, pref: String) -> i32 {
    words
        .iter()
        .filter(|w| w.starts_with(pref.as_str()))
        .count() as i32
}

fn main() {
    let words: Vec<String> = vec![
        "pay".to_string(),
        "attention".to_string(),
        "practice".to_string(),
        "attend".to_string(),
    ];

    println!(
        "Actual: {}, expected: {}",
        prefix_count(words, "at".to_string()),
        2
    );
}
