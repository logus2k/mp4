<script type="text/javascript">

function init() {

    // var cond = document.getElementById('hide-sidebar') || false;

    if (cond)
    {

        alert(cond);

        document.querySelector(".container.grey.pa-0.container--fluid.lighten-4").remove();
        document.querySelector(".layout.row > .flex.page-col-sd.lg3.xl2").remove();
        const cWidth = document.querySelector(".flex.page-col-content.xs12.lg9.xl10").classList;
        cWidth.add("lg12");
        cWidth.remove("lg9");
        document.querySelector(".flex.page-col-content.xs12.lg11.xl10").style.cssText = 'margin:auto;';
        document.querySelector("h4 .toc-anchor").remove();

	}
    else
    {

        document.querySelector(".layout.row > .flex.page-col-sd.lg3.xl2").style.cssText = 'display:block;';
    }
}

//document.addEventListener('DOMContentLoaded', function() {init(); });

window.onload="init();";

</script>