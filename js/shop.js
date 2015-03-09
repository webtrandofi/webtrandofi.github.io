$(document).ready(function(){
    $.ajax({
        url:  "//api.tumblr.com/v2/blog/trandofi.tumblr.com/posts/text?api_key=fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4",
        dataType: 'jsonp',
        success: function(results){
            console.log(results);
            results.response.posts.forEach(function(post){
                post_html = '<div class="span4">';
                post_html = post_html + '<h3>' + post.title + '</h3>' ;
                post_html = post_html+ post.body;
                post_html = post_html+ '<a type="button" name="" value="" class="cta" href="shop.html#yhteystiedot">Ota yhteyttä</a>';
                post_html = post_html +'</div>';
                
                $("#varaosakauppa_content").append(post_html);
            });
        }
    });
})

