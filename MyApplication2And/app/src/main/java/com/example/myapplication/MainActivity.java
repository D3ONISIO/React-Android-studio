package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

    Button guzik = (Button) findViewById(R.id.gudzik);
    guzik.setOnClickListener(new View.OnClickListener() {
        @Override
        public void onClick(View view) {
            Intent intencja = new Intent(MainActivity.this,MainActivity2.class);
            startActivity(intencja);
        }
    });

    }
}