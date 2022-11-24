
        var timeline_slider = $(".timeline_slider");

        timeline_slider.owlCarousel({
            smartSpeed: 800,
            loop: true,
            margin: 20,
            responsiveClass: true,
            autoplay: false,
            nav: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                },
                600: {
                    items: 2,
                    nav: true,
                },
                1000: {
                    items: 3,
                    nav: true,
                    loop: true
                }
            }
        })

        // end time line slider 

        var wt_left_arrow = $(".wt_left_arrow").attr('src');
        $('.timeline_slider button.owl-prev').html("<img src='" + wt_left_arrow + "'>");

        var wt_right_arrow = $(".wt_right_arrow").attr('src');
        $('.timeline_slider button.owl-next').html("<img src='" + wt_right_arrow + "'>");
        
        
        
        
        var active_nums = $(".timeline_slider .owl-item.active .timeline_slide_item .timeline_top p");
        var active_num_1 = active_nums[0].innerHTML;
        var active_num_2 = active_nums[1].innerHTML;
        var active_num_3 = active_nums[2].innerHTML;

        var non_active_nums = $(".timeline_slider .owl-item .timeline_slide_item .timeline_top p");
        var active_num_4 = non_active_nums[0].innerHTML;
        var active_num_5 = non_active_nums[1].innerHTML;

        $(".number_1").html(active_num_4);
        $(".number_2").html(active_num_5);
        $(".number_3").html(active_num_1);
        $(".number_4").html(active_num_2);
        $(".number_5").html(active_num_3);

        timeline_slider.on('changed.owl.carousel', function (property) {
            var current = property.item.index;
            var number_5 = $(property.target).find(".owl-item").eq(current).prev().prev().find(".timeline_top p").html();
            var number_4 = $(property.target).find(".owl-item").eq(current).prev().find(".timeline_top p").html();
            var number_1 = $(property.target).find(".owl-item").eq(current).find(".timeline_top p").html();
            var number_2 = $(property.target).find(".owl-item").eq(current).next().find(".timeline_top p").html();
            var number_3 = $(property.target).find(".owl-item").eq(current).next().next().find(".timeline_top p").html();

            $(".number_1").html(number_5);
            $(".number_2").html(number_4);
            $(".number_3").html(number_1);
            $(".number_4").html(number_2);
            $(".number_5").html(number_3);
        });


