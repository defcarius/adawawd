const e=document.querySelectorAll("a");e?.forEach(function(t){/\S+@\S+\.\S+/.test(t.href)&&(t.href="mailto:"+t.text)});
