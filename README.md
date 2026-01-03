📂 Download File Sorter (CLI Tool)

A simple, safe, and customizable Node.js CLI tool that automatically organizes files in your Downloads folder into categorized subfolders like Images, Docs, Music, Videos, etc.

Built with pure Node.js (no external dependencies).

✨ Features

📁 Automatically sorts files in the Downloads folder

🗂 Categorizes files by extension (Images, Docs, Music, Video, Other)

🔁 Handles duplicate filenames safely (no overwriting)

🛡 Dry run mode to preview changes without moving files

⚡ Fast and lightweight (sync filesystem operations)

🌍 Works across systems (Windows, macOS, Linux)

📌 How It Works

The tool:

Scans your Downloads folder

Detects file type based on extension

Creates category folders if they don’t exist

Moves files into the correct folder

Renames files safely if duplicates are found

Example structure after running:

Downloads/
 ├── Music/
 │    └── song.mp3
 ├── Docs/
 │    └── report.pdf
 ├── Image/
 │    └── photo.jpg
 └── Other/
      └── setup.exe

🛠 Installation
Prerequisites

Node.js (v14 or higher recommended)

Check:

node -v

Local Installation (Recommended for development)

Clone the repository and install globally:

git clone <your-repo-url>
cd download-file-sorter
npm install -g .

🚀 Usage
Sort your Downloads folder
sort-downloads


This will actually move files into their respective folders.

Dry Run (Preview Mode)
sort-downloads --dry-run


Shows what would happen

Does not move any files

Strongly recommended before first use

Example output:

[DRY RUN] song.mp3 → Music/song.mp3
[DRY RUN] report.pdf → Docs/report1.pdf

🛡 Safety Features

✅ Never overwrites files

✅ Handles duplicate names automatically

✅ Skips folders (only processes files)

✅ Dry-run mode for safe previews

✅ Errors are caught per file (script won’t crash midway)

📂 File Categories

Default categories:

Category	Extensions
Image	.jpg, .jpeg, .png
Docs	.pdf, .docx, .xlsx, .xls
Music	.mp3
Video	.mkv
Other	Everything else

You can easily extend this in the code.

🧠 Design Decisions

Uses synchronous filesystem APIs for predictable behavior

Uses os.homedir() for cross-system compatibility

Duplicate handling implemented via a helper function

CLI arguments handled via process.argv

No third-party libraries (clean & minimal)

🧪 Recommended Workflow

First run:

sort-downloads --dry-run


Verify the output

Run:

sort-downloads

📦 Project Structure
download-file-sorter/
 ├── index.js        # Main CLI entry
 ├── package.json
 └── README.md

🔮 Future Improvements

--help command

Custom config file (config.json)

Custom target folder (--path)

Async version

Recursive sorting

Publish to npm

👨‍💻 Author

Built by Arnav Pednekar
As a hands-on Node.js learning project focused on real-world tooling.

📜 License

MIT License — free to use, modify, and distribute.