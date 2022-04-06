function round_number(num) {
    //first, move the decimal two places
    num = num * 100;

    //then, round the number to the nearest integer
    num = Math.round(num);

    //then move the decimal back two places
    num = num / 100;

    // handle trailing zeroes
    num = num.toFixed(2);

    return num;
}

//get all of the calculator inputs 
const inputs = document.querySelectorAll("[name='qty']");

//evaluate all of the inputs
inputs.forEach(function (input) {

    //for each individaul input, listen for a change
    input.addEventListener("change", function (e) {
        const this_input = e.target;
            const qty = parseFloat(e.target.value);
            const this_row = this_input.closest(".row")

            const amazon = this_row.querySelector(".amazon");
            const amazon_span = amazon.querySelector("span");
            const amazon_price = parseFloat(amazon.dataset.price);
            const amazon_cost = amazon_price * qty;

            amazon_span.innerHTML = round_number(amazon_cost);
            amazon.classList.add("active");

            const freshdirect = this_row.querySelector(".freshdirect");
            const freshdirect_span = freshdirect.querySelector("span");
            const freshdirect_price = parseFloat(freshdirect.dataset.price);
            const freshdirect_cost = freshdirect_price * qty;

            freshdirect_span.innerHTML = round_number(freshdirect_cost);
            freshdirect.classList.add("active");


            const peapod = this_row.querySelector(".peapod");
            const peapod_span = peapod.querySelector("span");
            const peapod_price = parseFloat(peapod.dataset.price);
            const peapod_cost = peapod_price * qty;

            peapod_span.innerHTML = round_number(peapod_cost);
            peapod.classList.add("active");

            let cheap = false;
            if (amazon_cost < freshdirect_cost && amazon_cost < peapod_cost) {
                cheap = amazon;
            }

            if (freshdirect_cost < amazon_cost && freshdirect_cost < peapod_cost) {
                cheap = freshdirect;
            }
            
            if (peapod_cost < amazon_cost && peapod_cost < freshdirect_cost) {
                cheap = peapod;
            }

            const current_cheap = this_row.querySelector(".cheap");

            if (current_cheap) {
                current_cheap.classList.remove("cheap");
            }

            if (cheap){
                cheap.classList.add("cheap");
            }

    });
});
