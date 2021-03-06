const sleep = ms => new Promise(r => setTimeout(r, ms));

async function loadPage(path) {
  try {
    const response = await fetch(path, {
      method: 'HEAD',
    });
    const responseTimeStr = response.headers.get('X-Response-Time');
    return parseFloat(responseTimeStr.replace('ms', ''));
  } catch (e) {
    console.error(e);
  }
}

async function load(path, count) {
  const results = [];

  for (let i = 0; i < count; i++) {
    results.push(await loadPage(path));
    await sleep(200);
  }

  return results;
}

export { load };
