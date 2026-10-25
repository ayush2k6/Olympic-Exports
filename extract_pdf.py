import fitz  # PyMuPDF
import sys
import os

def extract_pdf(path, label):
    try:
        doc = fitz.open(path)
        print(f"\n{'='*60}")
        print(f"CATALOGUE: {label} | Pages: {doc.page_count}")
        print('='*60)
        for i, page in enumerate(doc):
            text = page.get_text().strip()
            if text:
                print(f"\n--- Page {i+1} ---")
                print(text[:1200])
        doc.close()
    except Exception as e:
        print(f"Error with {label}: {e}")

extract_pdf(r'C:\Users\Admin\Downloads\catalogue 1.pdf', 'Catalogue 1')
extract_pdf(r'C:\Users\Admin\Downloads\catalogue 2.pdf', 'Catalogue 2')
