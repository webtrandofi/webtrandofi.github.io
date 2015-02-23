$(document).ready(function(){
    $.ajax({
        url:  "//api.tumblr.com/v2/blog/lakiasiaintoimistotrast.tumblr.com/posts/text?api_key=fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4&limit=3&filter=text",
        dataType: 'jsonp',
        success: function(results){
            console.log(results);
            results.response.posts.forEach(function(post){
                post_html = '<div class="col-md-4"><article class="experience"><header><h3>' + post.title + '</h3></header><p>' + post.body.substring(0, 200);
                // if (post.boby.length > 200) {
                //    post_html = post_html  + '...'; 
                // }
                post_html = post_html  + '...'; 
                post_html = post_html + '<br><a href="' + post.post_url + '" target="_blank">More</a></p></article></div>';
                $("#tumblr-posts").append(post_html);
            });
        }
    });
})