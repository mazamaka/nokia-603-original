'use strict';
const colorLabels={black:'Чёрный',white:'Белый'};
const conditionLabels={any:'Любое состояние',used:'С пробегом',refurbished:'Восстановленный'};
function updateSelection(){
  const color=document.querySelector('input[name="color"]:checked').value;
  const condition=document.querySelector('input[name="condition"]:checked').value;
  document.getElementById('selection-summary').textContent=colorLabels[color]+' · '+conditionLabels[condition];
  const url=new URL('https://www.ebay.com/sch/i.html');
  url.searchParams.set('_nkw','"Nokia 603" '+color+' -6030 -battery -cover -screen -parts');
  url.searchParams.set('_sacat','9355');
  if(condition==='used')url.searchParams.set('LH_ItemCondition','3000');
  if(condition==='refurbished')url.searchParams.set('LH_ItemCondition','2000|2010|2020|2030|2500');
  document.getElementById('marketplace-link').href=url.href;
}
document.querySelectorAll('input[name="color"], input[name="condition"]').forEach(input=>input.addEventListener('change',updateSelection));
updateSelection();
document.querySelectorAll('.faq-list details').forEach(detail=>detail.addEventListener('toggle',()=>{
  if(detail.open)document.querySelectorAll('.faq-list details').forEach(other=>{if(other!==detail)other.open=false;});
}));
const modelContext=document.modelContext || navigator.modelContext;
if(modelContext && typeof modelContext.registerTool==='function'){
  Promise.resolve(modelContext.registerTool({
    name:'configure_nokia603',
    description:'Select Nokia 603 color and condition in the on-page buying guide and return the matching eBay search URL. Does not navigate, place an order, or process a payment.',
    inputSchema:{type:'object',properties:{color:{type:'string',enum:['black','white']},condition:{type:'string',enum:['any','used','refurbished']}},required:['color','condition'],additionalProperties:false},
    execute:async({color,condition})=>{
      if(!Object.hasOwn(colorLabels,color)||!Object.hasOwn(conditionLabels,condition))throw new Error('Unsupported selection');
      document.querySelector('input[name="color"][value="'+color+'"]').checked=true;
      document.querySelector('input[name="condition"][value="'+condition+'"]').checked=true;
      updateSelection();
      document.getElementById('buy').scrollIntoView({behavior:'auto',block:'start'});
      return {content:[{type:'text',text:JSON.stringify({model:'Nokia 603',color,condition,label:document.getElementById('selection-summary').textContent,marketplace_url:document.getElementById('marketplace-link').href,availability:'Confirm with seller'})}]};
    }
  })).catch(()=>{});
}
