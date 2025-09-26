import React, { useState } from 'react';

export default function CreateReportForm() {
  const [title, setTitle] = useState('');
  const [files, setFiles] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const f = new FormData();
    f.append('title', title);
    if (files) {
      for (let i = 0; i < files.length; i++) f.append('photos', files[i]);
    }
    const res = await fetch('/api/reports', { method: 'POST', body: f });
    const data = await res.json();
    alert(JSON.stringify(data));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Título" required />
      <input type="file" multiple onChange={e => setFiles(e.target.files)} />
      <button type="submit">Enviar reporte</button>
    </form>
  );
}
